import { useNavigate } from "react-router-dom";
import styles from "./UpdateID.module.css";
import { useState, useEffect } from "react";
import arrow from "../../assets/icons/arrowLeft.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import edit from "../../assets/icons/edit.svg";
import SelectDropdown from "../../components/SelectDropdown/SelectDropdown";
import axios from "axios";

const UpdateID = () => {
  const navigate = useNavigate();

  // Go back handler
  const handleGoBack = () => {
    navigate(-1);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showForm, setShowForm] = useState(false); 
  const [editable, setEditable] = useState({
    paymentDetails: false,
    address: false,
  });

  const [formData, setFormData] = useState({
    country: "Nigeria",
    bankName: "First Bank PLC",
    accountNumber: "0909090909",
    accountName: "Duke Chidi",
    addressCountry: "Lagos, Nigeria",
    state: "New York",
    city: "Kingston",
    address: "1203 Powder Street",
  });

  const [countries, setCountries] = useState<any[]>([]); 

  // Fetch country data from the API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
       
        

      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const banks = [
    { FullName: "First Bank PLC" },
    { FullName: "Access Bank" },
    { FullName: "Zenith Bank" },
    { FullName: "GT Bank" },
  ];

  const handleDropdownChange = (key: string) => (option: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: option.FullName,
    }));
  };

  // Toggle editable state
  const toggleEditable = (section: keyof typeof editable) => {
    setEditable((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleInputChange = (key: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Handle Continue button click
  const handleContinue = () => {
    setShowForm(true); // Show the form
  };

  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    documents: null,
  });

  const handleFileChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;
      setFiles((prevFiles) => ({
        ...prevFiles,
        [key]: file,
      }));
    };

  const FileUpload = ({
    label,
    fileKey,
    selectedFile,
    onChange,
  }: {
    label: string;
    fileKey: string;
    selectedFile: File | null;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }) => (
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
          label
        )}
        <input
          type="file"
          onChange={onChange}
          style={{ display: "none" }}
          aria-label={`Upload file for ${fileKey}`}
        />
      </label>
    </div>
  );

  return (
    <div className={styles.form}>
      {/* Header */}
      <div className={styles.header}>
        <img
          src={arrow}
          alt="Go Back"
          onClick={handleGoBack}
          className={styles.backButton}
          style={{ cursor: "pointer" }}
        />
        <p>Update ID</p>
      </div>

      {/* Password Section */}
      {!showForm && (
        <section className={styles.section}>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter Passsword"
                className={styles.passwordInput}
              />
              <span
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <AiOutlineEye size={24} />
                ) : (
                  <AiOutlineEyeInvisible size={24} />
                )}
              </span>
            </div>
            <p>Enter your Amani account password for verification</p>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            className={styles.submitButton}
            onClick={handleContinue}
          >
            Continue
          </button>
        </section>
      )}

      {/* Form Section */}
      {showForm && (
        <form>
          {/* Valid ID Section */}
          <section className={styles.section}>
            <h2>Valid ID</h2>
            <FileUpload
              label="Drag or upload document files"
              fileKey="documents"
              selectedFile={files.documents}
              onChange={handleFileChange("documents")}
            />
          </section>

          {/* Payment Account Details */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Payment Account Details</h2>
            </div>
            <div className={styles.inputGroup}>
              {editable.paymentDetails ? (
                <SelectDropdown
                  label="Country"
                  options={countries
                    .map((country) => ({
                      FullName: country.name.common,
                      Flag: country.flags.svg,
                    }))
                    .sort((a, b) => a.FullName.localeCompare(b.FullName))}
                  placeholder="Select Country"
                  selectedOption={{
                    FullName: formData.country,
                    
                  }}
                  onOptionSelect={handleDropdownChange("country")}
                  error={!formData.country ? "Country is required" : undefined}
                />
              ) : (
                <div>{formData.country}</div>
              )}
            </div>
            <div className={styles.inputGroup}>
              {editable.paymentDetails ? (
                <SelectDropdown
                  label="Bank Name"
                  options={banks}
                  placeholder="Select Bank"
                  selectedOption={{ FullName: formData.bankName }}
                  onOptionSelect={handleDropdownChange("bankName")}
                  error={
                    !formData.bankName ? "Bank Name is required" : undefined
                  }
                />
              ) : (
                <div>{formData.bankName}</div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label>Account Number</label>
              {editable.paymentDetails ? (
                <input
                  type="text"
                  value={formData.accountNumber}
                  onChange={(e) =>
                    handleInputChange("accountNumber")(e.target.value)
                  }
                />
              ) : (
                <div>{formData.accountNumber}</div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label>Account Name</label>
              {editable.paymentDetails ? (
                <input
                  type="text"
                  value={formData.accountName}
                  onChange={(e) =>
                    handleInputChange("accountName")(e.target.value)
                  }
                />
              ) : (
                <div>{formData.accountName}</div>
              )}
            </div>
            {editable.paymentDetails && (
              <>
                <p>
                  Kindly add your bank account details to receive Amani
                  payments.
                </p>
                <p>
                  Note: Microfinance banks and fintech companies are not
                  accepted by Amani for payments.
                </p>
              </>
            )}
            <img
              src={edit}
              alt=""
              className={styles.edit}
              onClick={() => toggleEditable("paymentDetails")}
            />
          </section>

          {/* Residential Address */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Residential Address</h2>
            </div>
            <div className={styles.inputGroup}>
              {editable.address ? (
                <SelectDropdown
                  label="Country"
                  options={countries
                    .map((country) => ({
                      FullName: country.name.common,
                      Flag: country.flags.svg,
                    }))
                    .sort((a, b) => a.FullName.localeCompare(b.FullName))}
                  placeholder="Select Country"
                  selectedOption={{ FullName: formData.country }}
                  onOptionSelect={handleDropdownChange("country")}
                  error={!formData.country ? "Country is required" : undefined}
                />
              ) : (
                <div>{formData.country}</div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label>State/County</label>
              {editable.address ? (
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state")(e.target.value)}
                />
              ) : (
                <div>{formData.state}</div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label>City</label>
              {editable.address ? (
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city")(e.target.value)}
                />
              ) : (
                <div>{formData.city}</div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label>Residential Address</label>
              {editable.address ? (
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address")(e.target.value)}
                />
              ) : (
                <div>{formData.address}</div>
              )}
            </div>
            <img
              src={edit}
              alt=""
              className={styles.edit}
              onClick={() => toggleEditable("address")}
            />
          </section>

          <button
            type="button"
            className={`${styles.submitButton} mb-4`}
            onClick={handleContinue}
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateID;
