- CRUD app

* CRUD = create + read + update + delete

- đăng nhập:
  - bắt đăng nhập với username và password thì mới cho truy cập vào hệ thống
- đăng ký

  - username
  - email
  - password

- danh sách người dùng
  user:

* userID - auto generated
* username - input field
* role - dropdown
* department - dropdown
* avatar - input file

path:

- localhost:3000/
- localhost:3000/sign-in
- localhost:3000/sign-up
- localhost:3000/create-user
- localhost:3000/:userID
- localhost:3000/update/:userID

- phân trang

  - list = 100 user item

- filter, search, sort

stack:

- react, react router, redux toolkit
- api: json server
- bootstrap, tailwindcss, module scss
