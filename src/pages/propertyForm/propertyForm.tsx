import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./propertyForm.module.css";
import location from "../../assets/logos/location.webp";
import file from "../../assets/icons/file.svg";
import SelectDropdown from "../../components/SelectDropdown/SelectDropdown";
import GuestsDropdown from "components/SearchBar/GuestsDropdown";
import MultiInputTextBox from "components/multiSelect/MultiInputTextBox";

interface Option {
  FullName?: string; // Optional FullName property
  [key: string]: any; // Allows additional properties
}
interface Guests {
  adults: number;
  teens: number;
  children: number;
  babies: number;
}

const PropertyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const options: Option[] = [
    { FullName: "House" },
    { FullName: "Apartment" },
    { FullName: "Shortlet" },
    { FullName: "Hotel" },
    { FullName: "Events Center" },
    { FullName: "Corporate" },
    { FullName: "Hostel" },
    { FullName: "Off Plan" },
  ];

  const tenantOptions: Option[] = [
    { FullName: "Everybody" },
    { FullName: "Married couples" },
    { FullName: "Students" },
  ];

  const duration: Option[] = [
    { FullName: "Per year" },
    { FullName: "Per month" },
    { FullName: "Per night" },
  ];

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<File[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [guests, setGuests] = useState<Guests>({
    adults: 0,
    teens: 0,
    children: 0,
    babies: 0,
  });
    const handleFocus = () => {
      console.log(`focused`);
    };

    // Handle input blur
    const handleBlur = () => {
      console.log("Input blurred");
    };

const onSubmit = (data: any) => {
  console.log(data);
  console.log("Amenities:", amenities);
  console.log("Guests:", guests);

  // Log the uploaded images
  console.log(
    "Uploaded Images:",
    selectedImage.map((file) => file.name)
  ); // Log the names of the uploaded images

  // Log the uploaded document
  if (selectedFile) {
    console.log("Uploaded Document:", selectedFile.name); // Log the name of the uploaded document
  } else {
    console.log("No document uploaded");
  }
};

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files).slice(0, 5); // Limit to 5 files
      setSelectedImage((prevFiles) => [
        ...prevFiles,
        ...fileArray.slice(0, 5 - prevFiles.length), // Ensure total doesn't exceed 5
      ]);
    }
  };

  const handleDeleteImage = (index: number) => {
    setSelectedImage((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const renderThumbnails = () => {
    return selectedImage.map((file, index) => (
      <div className={styles.thumbnail} key={index}>
        <img
          src={URL.createObjectURL(file)}
          alt={`Thumbnail ${index + 1}`}
          onLoad={(e) =>
            URL.revokeObjectURL((e.target as HTMLImageElement).src)
          } // Clean up memory
          className={styles.thumbnailImage}
        />
        <button
          className={`${styles.deleteButton}`}
          onClick={() => handleDeleteImage(index)}
        >
          <i className="fa fa-trash"></i> {/* Using Font Awesome trash icon */}
        </button>
      </div>
    ));
  };

  const handleGuestsChange = (updatedGuests: Guests) => {
    setGuests(updatedGuests);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* Amani Details */}
      <section className={styles.section}>
        <h2>Amani Details</h2>
        <div className={styles.inputGroup}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            {...register("title", { required: true })}
          />
          {errors.title && <p className={styles.error}>Title is required</p>}
        </div>
        <div className={styles.inputGroup}>
          <label>Description</label>
          <textarea
            rows={5}
            placeholder="Enter description"
            className={styles.customTextarea}
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p className={styles.error}>Description is required</p>
          )}
        </div>
      </section>

      {/* Attachments */}
      <section className={styles.section}>
        <h2>Attachments</h2>
        <div className={styles.fileUpload}>
          <label>
            Drag or <span>upload</span> amani files
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </label>
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
          {renderThumbnails()}
          {/* Add placeholders for remaining thumbnails if less than 5 */}
          {Array.from({ length: 5 - selectedImage.length }).map((_, index) => (
            <div
              className={styles.thumbnail}
              key={`placeholder-${index}`}
            ></div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Documents</h2>
        <div
          className={`${styles.fileUpload} ${
            selectedFile ? styles.fileSelected : ""
          }`}
        >
          <label>
            {selectedFile ? (
              <>
                <span className={styles.fileIcon}>📄</span> {selectedFile.name}
              </>
            ) : (
              "Drag or upload amani files"
            )}
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
        </div>
        <p>Add valid property documents, of the following:</p>
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
            {...register("address", { required: true })}
          />
          {errors.address && (
            <p className={styles.error}>Address is required</p>
          )}
        </div>
        <img src={location} alt={location} className={styles.locationImg} />
        <button type="button" className={styles.button}>
          Confirm Location
        </button>
      </section>

      {/* Category */}
      <section
        className={`${styles.section} flex flex-col gap-0 md:flex-row md:gap-20 `}
      >
        <div className="w-full md:w-[20%]">
          <h2>Category</h2>
          <div className={styles.inputGroup}>
            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <SelectDropdown
                  label="Select Amani Category"
                  options={options}
                  placeholder="Select an Amani Category"
                  selectedOption={field.value}
                  onOptionSelect={field.onChange}
                  error={
                    errors.category ? "Amani Category is required" : undefined
                  }
                />
              )}
            />
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <h2>Property availability</h2>
          <div className={styles.inputGroup}>
            <label>Select Availability Type</label>
            <div className={styles.buttonGroup}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" {...register("availability.rent")} />
                For rent
              </label>

              <label className={styles.checkboxLabel}>
                <input type="checkbox" {...register("availability.sale")} />
                For sale
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
                {...register("amaniType")}
              />
              <label htmlFor="standard">Standard</label>

              <input
                type="radio"
                id="luxury"
                value="luxury"
                {...register("amaniType")}
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

      {/* Tenant Preferences */}
      <section className={styles.section}>
        <h2>Tenant Preferences</h2>
        <div className={`${styles.inputGroup} w-full md:w-[20%]`}>
          <Controller
            control={control}
            name="preferredTenants"
            render={({ field }) => (
              <SelectDropdown
                label="Select Preferred Tenants"
                options={tenantOptions}
                placeholder="Select Preferred Tenants"
                selectedOption={field.value}
                onOptionSelect={field.onChange}
                error={
                  errors.preferredTenants
                    ? "Preferred Tenants is required"
                    : undefined
                }
              />
            )}
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
              type="text"
              placeholder="Enter the number of Bedrooms"
              {...register("bedrooms", { required: true })}
            />
            {errors.bedrooms && (
              <p className={styles.error}>Bedrooms are required</p>
            )}
          </div>
          <div className={`${styles.inputGroup} w-full md:w-3/6`}>
            <label>Toilets</label>
            <input
              type="text"
              placeholder="Enter the number of Toilets"
              {...register("toilets", { required: true })}
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
                type="text"
                {...register("basePrice", { required: true })}
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
                type="text"
                {...register("discount")}
                className={styles.input2}
              />
            </div>
          </div>
          <div>
            <label className="mb-2">Caution fees</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>%</span>
              <input
                type="text"
                {...register("cautionFees")}
                className={styles.input2}
              />
            </div>
          </div>
          <div>
            <label className="mb-2">Service charge</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>%</span>
              <input
                type="text"
                {...register("serviceCharge")}
                className={styles.input2}
              />
            </div>
          </div>
          <div>
            <label className="mb-2">Legal</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>%</span>
              <input
                type="text"
                {...register("legal")}
                className={styles.input2}
              />
            </div>
          </div>
          <div>
            <label className="mb-2">Amani Service fee</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>%</span>
              <input
                type="text"
                {...register("serviceFee")}
                className={styles.input2}
              />
            </div>
          </div>
          <div>
            <label className="mb-2">Total amani price</label>
            <div className={styles.currencyInput}>
              <span className={styles.symbol}>%</span>
              <input
                type="text"
                {...register("totalPrice")}
                className={styles.input2}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[32%] mt-4">
          <Controller
            control={control}
            name="duration"
            render={({ field }) => (
              <SelectDropdown
                label="Select Duration"
                options={duration}
                placeholder="Select Duration Per Stay"
                selectedOption={field.value}
                onOptionSelect={field.onChange}
                error={
                  errors.duration ? "Tenant Duration is required" : undefined
                }
              />
            )}
          />
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
