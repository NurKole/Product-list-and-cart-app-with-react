import React from "react";
import TextInput from "../toolbox/textInput";
import SelectInput from "../toolbox/SelectInput";
import { connect } from "react-redux";


const ProductDetail = ({ categories, product, onSave, onChange, errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="product name"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />
     
     
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz" 
        options={categories.length > 0 ? categories.map(category => ({
          value: category.id,
          text: category.categoryName
        })) : []}
        onChange={onChange} 
        error= {errors.categoryId}
      ></SelectInput>
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />
      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />
      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />
    
      <button type="submit" className="btn btn-succes">
        Save
      </button>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer,
  };
}

export default connect(mapStateToProps)(ProductDetail);
