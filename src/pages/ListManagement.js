import AddLocation from "../components/AddLocation";
import "./ListManagement.css";
import SelectLocations from "../components/SelecetLocations";
const ListManagement = () => {
  return <>
      <SelectLocations editable/>
      <AddLocation />
    </>
};
export default ListManagement;
