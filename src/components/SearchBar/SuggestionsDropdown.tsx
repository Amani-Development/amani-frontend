import vectorImage from "../../assets/icons/location-icon.svg";
import styles from "./SuggestionsDropdown.module.css";

interface SuggestionsDropdownProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
  showSuggestions: boolean;
}

const SuggestionsDropdown = ({
  suggestions,
  onSuggestionClick,
  showSuggestions,
}: SuggestionsDropdownProps) => {
  if (!showSuggestions) return null;

  return (
    <div className={styles.suggestionsBox}>
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <div
            key={index}
            className={styles.suggestionItem}
            onClick={() => onSuggestionClick(suggestion)}
          >
            <span className={styles.icon}><img src={vectorImage} alt="" /></span> {suggestion}
          </div>
        ))
      ) : (
        <div className={styles.noResults}>No results found</div>
      )}
    </div>
  );
};

export default SuggestionsDropdown;
