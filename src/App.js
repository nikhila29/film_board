import React,{useState} from 'react'

const data = {
	"name": "Equipments",
	"slug": "equipments",
	"schema": {
			"field_groups": [{
					"name": "Equipment Information",
					"slug": "equipment_information",
					"fields": [
							{
									"name": "Equipment No",
									"slug": "equipment_no",
									"type": "TEXT",
									"min_length": 1,
									"max_length": 255,
									"is_unique": true,
									"is_required": true
							},
							{
									"name": "First Name",
									"slug": "first_name",
									"type": "TEXT",
									"min_length": 1,
									"max_length": 255,
									"is_required": true
							},
							{
									"name": "Last Name",
									"slug": "last_name",
									"type": "TEXT",
									"min_length": 1,
									"max_length": 255,
									"is_required": true
							},
							{
									"name": "Mobile Phone",
									"slug": "mobile_phone",
									"type": "TEXT",
									"pattern": "",
									"is_required": true
							},
							{
									"name": "Email",
									"slug": "email",
									"type": "EMAIL",
									"is_required": true
							},
							
							{
									"name": "Category",
									"slug": "category",
									"type": "DROPDOWN",
									"is_required": true,
									"is_external": false,
									"is_multi": false,
									"data_source_local": {
											"options": [
													{
															"label": "Residential",
															"value": "Residential"
													},
													{
															"label": "Commercial",
															"value": "Commercial"
													}
											]
									}
							},
							{
									"name": "Sales tax code",
									"slug": "sales_tax_code",
									"type": "TEXT",
									"min_length": 1,
									"max_length": 255,
									"is_required": false
							},
							{
									"name": "Invoice method",
									"slug": "invoice_method",
									"type": "DROPDOWN",
									"is_required": true,
									"is_external": false,
									"is_multi": false,
									"data_source_local": {
											"options": [
													{
															"label": "Email",
															"value": "email"
													},
													{
															"label": "Paper",
															"value": "paper"
													}
											]
									}
							},
							{
									"name": "Invoice Type",
									"slug": "invoice_type",
									"type": "TEXT",
									"min_length": 1,
									"max_length": 255,
									"is_required": false
							}
					]
			}]
	}
}

export const App = () => {

	const [inputarr, setInputarr] = useState([]);

	const [inputdata, setInputData] = useState({
		equipment_no: '',
		first_name: '',
		last_name: '',
		mobile_phone: '',
		email: '',
		category: '',
		sales_tax_code: '',
		invoice_method: '',
		invoice_type: ''

	})

	function changehandle(e) {

		setInputData({
			...inputdata, 
			[e.target.name]: e.target.value
		})
	}

	let { equipment_no,
		first_name,
		last_name,
		mobile_phone,
		email,
		category,
		sales_tax_code,
		invoice_method,
		invoice_type} = inputdata;

	function changhandle() {
		setInputarr([...inputarr, {
			equipment_no,
			first_name,
			last_name,
			mobile_phone,
			email,
			category,
			sales_tax_code,
			invoice_method,
			invoice_type
		}])

		setInputData({
			equipment_no: '',
			first_name: '',
			last_name: '',
			mobile_phone: '',
			email: '',
			category: '',
			sales_tax_code: '',
			invoice_method: '',
			invoice_type: ''
		})
	}

	let delethandle =(i)=>{
		let newdataArr=[...inputarr]
		newdataArr.splice(i,1)
		setInputarr(newdataArr)
	}

	function changehandle2() {
		console.log("Object store in array", inputarr);
	}


	return (
		<div className='wrapper'>
			<h1>Equipments List App</h1>
			<p>Add and view your equipments info </p>
			<div className='main'>
				<div className='form-container'>
					{
							data.schema.field_groups.map(formData => {
								return(
									<div>
										<h1>{formData.name}</h1>
										{
											formData.fields.map(inputData => {
												return(
													<div>
														<label>{inputData.name}:</label>
														<input type={inputData.type} className='form-control' autoComplete='off' name={inputData.name} required={inputData.is_required} multiple={inputData.is_multi}
														onChange={changehandle} value={inputdata.value}></input>
													</div>
												)
											})
										}
									</div>
								)
							})
						}
					<button onClick={changhandle} > ADD </button><br></br>
					<button onClick={changehandle2}> Check Array in Console</button><br></br>
				</div>

				<div className='view-container'>
		
				<div className='table-responsive'>
					<table className='table' border={1} cellPadding={10}>
						<tbody>
							<tr>
								<th>Equipment No</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Mobile Phone</th>
								<th>Email</th>
								<th>Category</th>
								<th>Sales tax code</th>
								<th>Invoice method</th>
								<th>Invoice Type</th>
							</tr>
							{inputarr.length < 1 ?
								<tr>
										<td colSpan={4}>NO data Enter yet !</td>
								</tr>:
							inputarr.map((info, ind) => {
								return(
									<tr key={ind}>
										<td>{info.equipment_no}</td>
										<td>{info.first_name}</td>
										<td>{info.last_name}</td>
										<td>{info.mobile_phone}</td>
										<td>{info.email}</td>
										<td>{info.category}</td>
										<td>{info.sales_tax_code}</td>
										<td>{info.invoice_method}</td>
										<td>{info.invoice_type}</td>
										<td><button onClick={()=>delethandle(ind)}>Delete</button></td>
									</tr>
								)
								})
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	)
}

export default App;
