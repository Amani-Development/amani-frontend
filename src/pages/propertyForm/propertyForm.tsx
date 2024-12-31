import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./propertyForm.module.css";
import MapComponent from "components/map/Map";
import SelectDropdown from "../../components/SelectDropdown/SelectDropdown";
import GuestsDropdown from "components/SearchBar/GuestsDropdown";
import MultiInputTextBox from "components/multiSelect/MultiInputTextBox";
import SelectDropdownII from "components/selectDropdownII/SelectDropdownII";
import { uploadToCloudinary } from "api/UploadCloudinary";

interface Option {
  FullName?: string;
  [key: string]: any; 
}
interface Guests {
  adults: number;
  teens: number;
  children: number;
  babies: number;
  pets: number;
}

// types.ts
export interface Option2 {
  FullName: string;
}

interface DropdownOption {
  FullName?: string;
  Symbol?: string;
}

const PropertyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const options: Option2[] = [
    { FullName: "House" },
    { FullName: "Apartment" },
    { FullName: "Shortlet" },
    { FullName: "Hotel" },
    { FullName: "Events Center" },
    { FullName: "Corporate" },
    { FullName: "Hostel" },
    { FullName: "Off Plan" },
  ];

  const tenantOptions: Option2[] = [
    { FullName: "Everybody" },
    { FullName: "Married couples" },
    { FullName: "Students" },
  ];

  const duration: Option2[] = [
    { FullName: "Per year" },
    { FullName: "Per month" },
    { FullName: "Per night" },
  ];

    const currencyData: DropdownOption[] = [
      { FullName: "NGN", Symbol: "₦" },
      { FullName: "USD", Symbol: "$" },
      { FullName: "BPS", Symbol: "£" },
      { FullName: "Euro", Symbol: "€" },
    ];

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
 const [latitude, setLatitude] = useState<number>(0);
 const [longitude, setLongitude] = useState<number>(0);
 const address = watch("address");
  const [selectedImage, setSelectedImage] = useState<File[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [guests, setGuests] = useState<Guests>({
    adults: 0,
    teens: 0,
    children: 0,
    babies: 0,
    pets: 0,
  });
    const handleFocus = () => {
      console.log(`focused`);
    };

    // Handle input blur
    const handleBlur = () => {
      console.log("Input blurred");
    };

    const validLength = selectedImage.length || JSON.parse(localStorage.getItem('validLength') ?? "0");

  const [formData, setFormData] = useState(
      {
        title: "",
        description: "",
          attachments: Object.fromEntries(
              Array.from(
                  { length: validLength },
                  (_, index) => [
                      `att${index + 1}`,
                      localStorage.getItem(`uploaded_file_cloudinary_url_${index}`) ?  localStorage.getItem(`uploaded_file_cloudinary_url_${index}`) : "",
                  ]
              )
          ),
          location: "",
        category: "",
        availability: "",
        type: "",
        tenant_preference: "",
        documents: {
          doc1: localStorage.getItem('uploaded_Docs_cloudinary_url') ? localStorage.getItem('uploaded_Docs_cloudinary_url') : "",

        },
        guest_adults: 0,
        guest_teens:  0,
        guest_children:  0,
        guest_babies: 0,
        guest_pets:  0,
        bedrooms:  0,
        toilets:  0,
        amenities: {
          amenityList: [],
        },
        currency: "",
        base_price:  0,
        discount:  0,
        caution_fees:  0,
        service_charge:  0,
        legal:  0,
        amani_service_fee:  0,
        total_amani_price:  0,
        duration: "",
        amani_status: "",
        host: 0
      });

const onSubmit = (data: any) => {
  console.log(data);
  console.log("Amenities:", amenities);
  console.log("Guests:", guests);


  // Log the uploaded images
  console.log(
    "Uploaded Images:",
    selectedImage.map((file) => file.name)
  ); 

  if (selectedFile) {
    console.log("Uploaded Document:", selectedFile.name); 
  } else {
    console.log("No document uploaded");
  }
};

  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  // const [uploadedURL, setUploadedURL] = useState<string | null>(null);

  const [loadingCloud, setLoadingCloud] = useState(false);

  const getUploadURL = (fileURL: string | null, fileName: string, urlKeyname: string): void => {
    setLoadingCloud(true);
    if (fileURL) {
      setUploadStatus('Uploading...');
      uploadToCloudinary(fileURL, fileName)
          .then((url: string) => {
            localStorage.setItem(urlKeyname, url); // Update with the uploaded URL
            // setUploadedURL(url);
            setLoadingCloud(false);
            setUploadStatus('Upload successful');
          })
          .catch((error: unknown) => {
            console.error('Error uploading file:', error);
            setUploadStatus('Upload failed');
            setLoadingCloud(false);

          });
    } else {
      console.log('File undefined');
    }
  };


 const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    if (file.size <= 5 * 1024 * 1024) { // 5 MB limit
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        const fileDataURI = reader.result as string;
        const fileName = file.name;
        const localURLName = 'uploaded_Docs';
        const localFileName = 'uploaded_Docs_name';
        const finalCloudinaryURL = 'uploaded_Docs_cloudinary_url';

        // Save file data URI to localStorage
        localStorage.setItem(localURLName, fileDataURI);
        localStorage.setItem(localFileName, fileName);

        // Upload to Cloudinary
        getUploadURL(localURLName, localFileName, finalCloudinaryURL);
      };

      reader.onerror = () => {
        setUploadStatus('Failed to read file');
      };

      reader.readAsDataURL(file);
    } else {
      setUploadStatus('File size exceeds 5 MB');
    }
  }
};


const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = event.target.files;
  if (files) {
    const fileArray = Array.from(files).slice(0, 5);
    const validFiles = fileArray.filter(
      (file) => file.size <= 20 * 1024 * 1024
    ); // 20 MB limit
    setSelectedImage((prevFiles) => [
      ...prevFiles,
      ...validFiles.slice(0, 5 - prevFiles.length),
    ]);

    const totalValidFiles = validFiles.length;
    localStorage.setItem('validLength', JSON.stringify(totalValidFiles));

    validFiles.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileDataURI = reader.result as string;
        const fileName = file.name;
        const localURLName = `uploaded_file_${index}`;
        const localFileName = `uploaded_file_name_${index}`;
        const finalCloudinaryURL = `uploaded_file_cloudinary_url_${index}`;

        // Save file data URI to localStorage
        localStorage.setItem(localURLName, fileDataURI);
        localStorage.setItem(localFileName, fileName);

        // Upload to Cloudinary
        getUploadURL(localURLName, localFileName, finalCloudinaryURL);
      };

      reader.onerror = () => {
        setUploadStatus('Failed to read file');
      };

      reader.readAsDataURL(file);
    });
  }
};

console.log(uploadStatus);

  // const handleDeleteImage = (index: number) => {
  //   setSelectedImage((prevFiles) => prevFiles.filter((_, i) => i !== index));
  // };

  const renderThumbnails = () => {
   const validLength = selectedImage.length || JSON.parse(localStorage.getItem('validLength') ?? '0');
      return Array.from({ length: validLength }).map((file, index) => (
          <div className={styles.thumbnail} key={index}>
           <img
            src={localStorage.getItem(`uploaded_file_cloudinary_url_${index}`) || undefined}
            alt={`Thumbnail ${index + 1}`}
                    className={styles.thumbnailImage}
                  />
            {/*<button*/}
            {/*  className={`${styles.deleteButton}`}*/}
            {/*  onClick={() => handleDeleteImage(index)}*/}
            {/*>*/}
            {/*  <i className="fa fa-trash"></i> /!* Using Font Awesome trash icon *!/*/}
            {/*</button>*/}
            {/*<p>{localStorage.getItem(`uploaded_file_cloudinary_url_${index}`) || ''}</p>*/}
          </div>
    ));
  };

  const handleGuestsChange = (updatedGuests: Guests) => {
    setGuests(updatedGuests);
  };
// const [loading, setLoading] = useState(false);



useEffect(() => {
  if (address) {

    // setLoading(true);
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        address
      )}&key=YOUR_API_KEY`
    )
      .then((response) => response.json())
      .then((data) => {
        // setLoading(false);
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry;
          setLatitude(lat);
          setLongitude(lng);
        } else {
          alert("No results found for this address.");
        }
      })
      .catch((error) => {
        // setLoading(false);
        console.error("Error fetching geocoding data:", error);
        alert("Could not find the location. Please check the address.");
      });
  }
}, [address]);

const handleCategorySelect = (item: Option) => {
  console.log('Selected item:', item.FullName);
  setFormData((prevFormData) => ({
    ...prevFormData,
    category: item.FullName || "",
  }));
};


  const handleTenantSelect = (item: Option) => {
    console.log('Selected item:', item.FullName);
    setFormData((prevFormData) => ({
      ...prevFormData,
      tenant_preference: item.FullName || "",
    }));
  };

  const handleInput = (e ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

useEffect(() => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    amenities: {
      ...prevFormData.amenities,
      amenityList: amenities as never[],
    },
  }));
}, [amenities]);



useEffect(() => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    guest_adults: guests.adults,
    guest_teens: guests.teens,
    guest_children: guests.children,
    guest_babies: guests.babies,
    guest_pets: guests.pets,
  }));


}, [guests]);


  console.log(formData, amenities, guests);





  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* Amani Details */}
      <section className={styles.section}>
        <h2>Amani Details</h2>
        <div className={styles.inputGroup}>
          <label>Title</label>
          <input
            type="text"
            onChange={handleInput}
            name='title'
            value={formData.title}
          />
          {errors.title && <p className={styles.error}>Title is required</p>}
        </div>
        <div className={styles.inputGroup}>
          <label>Description</label>
          <textarea
            rows={5}
            placeholder="Enter description"
            className={styles.customTextarea}
            onChange={handleInput}
            name='description'
            value={formData.description}
          />
          {errors.description && (
            <p className={styles.error}>Description is required</p>
          )}
        </div>
      </section>

      {/* Attachments */}
      <section className={styles.section}>
        <h2>Attachments</h2>
        <div onClick={() => document.getElementById('attachment')?.click()} className={styles.fileUpload}>
          <label>
            Drag or <span>upload</span> amani files </label>
            <input
              type="file"
             accept="image/*,video/*"
              multiple
              id='attachment'
              onChange={handleImageChange}
              style={{ display: "none" }}
            />

        </div>
        <p>
          You can upload up to 5 images and a video with a max size of 20 MB.
        </p>
      </section>

      {/* Gallery */}
      <section className={styles.section}>
        <h2>Gallery Preview</h2>
        <span>Thumbnail</span>
        <div className={styles.gallery}>
          {loadingCloud ? 'Loading..' :

              <>
                {renderThumbnails()}
                {/* Add placeholders for remaining thumbnails if less than 5 */}
                {Array.from({ length: 5 - (selectedImage.length || JSON.parse(localStorage.getItem('validLength') ?? "0")) }).map((_, index) => (
                    <div
                        className={styles.thumbnail}
                        key={`placeholder-${index}`}
                    ></div>
                ))}
              </>
             }

        </div>
      </section>

      {/* Category */}
      <section
        className={`${styles.section} flex flex-col gap-0 md:flex-row md:gap-20 `}
      >
        <div className="w-full md:w-[20%]">
          <h2>Category</h2>
          <div className={styles.inputGroup}>
            <SelectDropdownII
                label="Property Type"
                options={options}
                onChange={handleCategorySelect}
                placeholder="Property type"
            />
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <h2>Property availability</h2>
          <div className={styles.inputGroup}>
            <label>Select Availability Type</label>
            <div className={styles.buttonGroup}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox"
                       onChange={handleInput}
                       name='availability'
                       value='rent'

                />
                For rent
              </label>

              <label className={styles.checkboxLabel}>
                <input type="checkbox"
                       onChange={handleInput}
                       name='availability'
                       value='sale'
                />
                For sale
              </label>

              <label className={styles.checkboxLabel}>
                <input type="checkbox"
                       onChange={handleInput}
                       name='availability'
                       value='sale and rent'
                />
                Both
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2>Type</h2>
          <div className={styles.inputGroup}>
            <label>Select Amani Type</label>
            <div className={styles.buttonGroup}>
              <input
                  type="radio"
                  id="standard"
                value="standard"
                onChange={handleInput}
                name='type'

              />
              <label htmlFor="standard">Standard</label>

              <input
                type="radio"
                id="luxury"
                value="luxury"
                onChange={handleInput}
                name='type'
              />
              <label htmlFor="luxury">Luxury</label>
            </div>
          </div>
          <p className={styles.note}>
            Note: Your Amani will go through a verification process to determine
            if it meets luxury status or not.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Documents</h2>
        <div
            onClick={() => document.getElementById('attachmentDoc')?.click()}
          className={`${styles.fileUpload} ${
            selectedFile ? styles.fileSelected : ""
          }`}
        >
          <label>
            {selectedFile || ( localStorage.getItem('uploaded_Docs_cloudinary_url') ? localStorage.getItem('uploaded_Docs_cloudinary_url') : "") ? (
              <>
                <span className={styles.fileIcon}>📄</span> {selectedFile?.name || localStorage.getItem('uploaded_Docs_name')}
              </>
            ) : (
              "Drag or upload amani files"
            )}   </label>
           <input
               type={"file"}
               accept=".pdf,.jpeg,.png, .jpg"
              id='attachmentDoc'
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

        </div>
        <p>Add valid property documents in PDF, JPEG, or PNG Format, of the following:</p>
        <p>
          1. Property title document (i.e: Certificate of Occupancy, Registered
          deed of assignment, Governors consent, etc.)
        </p>
        <p>2. Contract of Sale</p>
        <p>3. Survey document</p>
        <p>Or any other valid property documents currently available.</p>
      </section>

        {/* Location */}
      <section className={styles.section}>
        <h2>Location</h2>
        <div className={styles.inputGroup}>
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter landmark here"
            onChange={handleInput}
            name='location'
            value={formData.location}
          />
          {errors.address && <p className={styles.error}>Address is required</p>}
        </div>

      
        {latitude && longitude ? (
          <MapComponent latitude={latitude} longitude={longitude} />
        ) : (
          <p>Loading map...</p> 
        )}

        <button
          type="button"
          className={styles.button}
          disabled={!latitude || !longitude}
        >
          Confirm Location
        </button>
      </section>

      {/* Tenant Preferences */}
      <section className={styles.section}>
        <h2>Tenant Preferences</h2>
        <div className={`${styles.inputGroup} w-full md:w-[20%]`}>
            <SelectDropdownII
                label="Tenant Preferences"
                onChange={handleTenantSelect}
                options={tenantOptions}
                placeholder="Tenant Preferences"
            />
        </div>
      </section>

      {/* Guests, Bathrooms and Toilets */}
      <section className={styles.section}>
        <h2>Guests, Bathrooms and Toilets</h2>
        <div className={styles.inputGroup}>
          <label>Guests</label>
          <div className={styles.guest}>
            <GuestsDropdown
              guests={guests}
              onGuestsChange={handleGuestsChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className={`${styles.inputGroup} w-full md:w-3/6`}>
            <label>Bedrooms</label>
            <input
              type="number"
              placeholder="Enter the number of Bedrooms"
              name='bedrooms'
                onChange={handleInput}
                value={formData.bedrooms}

            />
            {errors.bedrooms && (
              <p className={styles.error}>{errors.bedrooms.message}</p>
            )}
          </div>
          <div className={`${styles.inputGroup} w-full md:w-3/6`}>
            <label>Toilets</label>
            <input
              type="number"
              placeholder="Enter the number of Toilets"
                name='toilets'
                    onChange={handleInput}
                    value={formData.toilets}

            />
            {errors.toilets && (
              <p className={styles.error}>Toilets are required</p>
            )}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className={styles.section}>
        <h2>Amenities</h2>
        <div className={styles.inputGroup}>
          <label>Amenities</label>
          <MultiInputTextBox
            value={amenities}
            onChange={setAmenities}
            placeholder="Add amenities"
          />
        </div>
        <p className={styles.recommend}>
          Recommended tags: <span>Free parking spot</span>{" "}
          <span>Play Station5</span> <span>Gym</span> <span>Hot tub</span>{" "}
          <span>Pool</span> <span>Workspace</span>
        </p>
      </section>

      {/* Pricing */}
      <section className={styles.section}>
        <h2>Pricing</h2>
        <div className={styles.priceBox}>
          <div>
            <label className="mb-2">Base Price</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>₦</span>
              <input
                type="number"
                name='base_price'
                onChange={handleInput}
                value={formData.base_price}
                className={styles.input2}
              />
            </div>
            {errors.basePrice && (
              <p className={styles.error}>Base Price is required</p>
            )}
          </div>

          <div>
            <label className="mb-2">Set a discount if you wish to</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>%</span>
              <input
                type="number"
                name='discount'
                onChange={handleInput}
                value={formData.discount}
                className={styles.input2}
              />
            </div>
          </div>
          <div>
            <label className="mb-2">Caution fees</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>%</span>
              <input
                type="number"
                name='caution_fees'
                onChange={handleInput}
                value={formData.caution_fees}
                className={styles.input2}
              />
            </div>
          </div>
          <div>
            <label className="mb-2">Service charge</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>%</span>
              <input
                type="number"
                name='service_charge'
                onChange={handleInput}
                value={formData.service_charge}
                className={styles.input2}
              />
            </div>
          </div>
          <div>
            <label className="mb-2">Legal</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>%</span>
              <input
                type="number"
                name='legal'
                onChange={handleInput}
                value={formData.legal}
                className={styles.input2}
              />
            </div>
          </div>
          <div>
            <label className="mb-2">Amani Service fee</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>%</span>
              <input
                type="number"
                name='amani_service_fee'
                onChange={handleInput}
                value={formData.amani_service_fee}
                className={styles.input2}
              />
            </div>
          </div>
          <div>
            <label className="mb-2">Total amani price</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>%</span>
              <input
                type="number"
                name='total_amani_price'
                onChange={handleInput}
                value={formData.total_amani_price}
                className={styles.input2}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[32%] mt-4">
            <SelectDropdownII
                label="Duration"
                options={duration}
                onChange={(item) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    duration: item.FullName || "",
                  }));
                }}
                placeholder="Duration"
            />
          </div>{" "}
          <div className="w-full md:w-[32%] mt-4">
            <SelectDropdownII
                label="Currency"
                options={currencyData.map((currency) => ({
                  ...currency,
                  FullName: `${currency.Symbol} - ${currency.FullName}`,
                }))}
                onChange={(item) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    currency: item.FullName || "",
                  }));
                }}
                placeholder="Currency"
            />
          </div>
        </div>
      </section>

      {/* Submit */}
      <button type="submit" className={styles.submitButton}>
        Upload Property
      </button>
    </form>
  );
};

export default PropertyForm;
