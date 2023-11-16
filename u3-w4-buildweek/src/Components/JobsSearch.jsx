import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/actions/loading";
import { useEffect } from "react";



const JobsSearch = function () {
    const isLoading = useSelector((state) => state.loading.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(false));
    }, []);

return(
    <>
         {!isLoading &&
         <>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        </>
         }
    </>
)
}
export default JobsSearch;