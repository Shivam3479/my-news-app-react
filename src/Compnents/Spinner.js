import loading from "./loading.gif";

const Spinner=()=>{
    return(<>
        <div className="text-center py-3">
            <img src={loading} style={{width:"40px"}} alt="loading" />
        </div>
    </>)
}
export default Spinner;