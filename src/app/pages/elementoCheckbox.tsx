
function ElementoCheckbox() {

interface Elementos{
    icone: string;
    texto: string;
    bgColor: string;
}

    return (
        <label className="d-flex flex-stack mb-5 cursor-pointer">    
        <span className="d-flex align-items-center me-2">           
            <span className="symbol symbol-50px me-6">
                <span className="symbol-label bg-light-primary">
                    <i className="ki-duotone ki-compass fs-1 text-primary"><span className="path1"></span><span className="path2"></span></i>
                </span>
            </span>       
            <span className="d-flex flex-column">
                <span className="fw-bold fs-6">Quick Online Courses</span>
                <span className="fs-7 text-muted">Creating a clear text structure is just one SEO</span>
            </span>
        </span>
        <span className="form-check form-check-custom form-check-solid">
            <input className="form-check-input" type="radio"  name="category" value="1"/>
        </span>
    </label>
    )
}
export default ElementoCheckbox