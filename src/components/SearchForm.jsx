import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // whatever the "name" attr is, it is shown in the URL like this: http://localhost:5174/?search=vodka
  // and the word after search= is the input value
  return (
    <Wrapper>
      <Form className="form">
        <input type="search" name="search" defaultValue={searchTerm} className="form-input" />

        <button type="submit" disabled={isSubmitting} className="btn">
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
