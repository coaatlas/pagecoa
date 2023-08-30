import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { onAddProducto, onLoadedProductos, onSetActiveProducto, onUpdateProducto,onDeleteProducto } from "../store";




export const useProductoStore = () => {

  const dispatch = useDispatch();
  const {productos,activeProducto,  }=useSelector((state) => state.products);
  const { user } = useSelector(state => state.auth);

 
  const setActiveProducto = (productoEvent) => {
    dispatch(onSetActiveProducto(productoEvent));
  };

  const startSavingProducto = async (producto) => {
    try {
      if (producto.id) {
        const { data } = await calendarApi.put(`/productos/${producto.id}`, producto);
        dispatch(onUpdateProducto({ ...producto, user }));
        return;
      }
      // Creando

      const { data } = await calendarApi.post("/productos", producto);
      dispatch(onAddProducto({ ...producto, id: data.producto.id, user }));
    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", error.response.data?.msg, "error");
    }
  };

  const startLoadingProductos = async ( ) => { 
    try {
      const { data } = await calendarApi.get("/productos");
      dispatch(onLoadedProductos(data.productos));
    } catch (error) {
      console.log(error);
      Swal.fire("Error al cargar", error.response.data?.msg, "error");
    }
  };

  

  const startDeletingProducto = async (id) => {
    try {
      const { data } = await calendarApi.delete(`/productos/${id}`);
      dispatch(onDeleteProducto(id));
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data?.msg, "error");
    }
  };
  


  return {
    productos,
    activeProducto,
    setActiveProducto,
    startSavingProducto,
    startLoadingProductos,
    startDeletingProducto,

  }
}
