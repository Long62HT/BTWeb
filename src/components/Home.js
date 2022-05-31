export default function Home(){
    return(
        <div class="container-fluid" style={{
            "paddingTop":"10px",
            "paddingBottom":"10px",
            "borderBottom":"7px solid rgb(190, 15, 15)"
        }}>
	<div class="row">
		<div class="col-md-3">
			<img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" 
            style={{"width":"221.5px"}}/>
		</div>
		<div class="col-md-6" style={{
            "fontSize": "18px",
            "textAlign": "left",
            "fontWeight": "700",
            "paddingTop": "20px",
            "letterSpacing":"3px",
            "fontFamily":"sans-serif"
        }}>
			<h3>
            <strong class="upcase tt-2" 
            style={{"line-height:":"1.2",
                    "letter-spacing":".05rem",
                    "font-size":"18px"}}>ĐẠI HỌC BÁCH KHOA HÀ NỘI</strong> <br></br>
            <strong class="upcase tt-2" style={{
                "letter-spacing":".05rem",
                "font-size":"18px"
            }}>TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</strong> 
			</h3>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class="col-md-1" style={{
                    "padding-left":"250px"
                }}>
					<img alt="Bootstrap Image Preview" src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png" />
				</div>
				<div class="col-md-1" style={{ "textAlign":"left"}}>
					<img alt="Bootstrap Image Preview" src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/gb.png" 
                    />
				</div>
			</div> <span>
            <div class="row">
                        <div class="col-md-12">
                            <div class="input-group rounded" style={{
                                "width":"300px"
                            }}>
                                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  style={{
                                "width":"200px"
                            }}/>
                                <span class="input-group-text border-0" id="search-addon">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>
            </span>
		</div>
	</div>
</div>
    );
}