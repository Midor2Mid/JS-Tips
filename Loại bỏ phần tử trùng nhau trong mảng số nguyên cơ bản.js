// Chỉ dùng cho ES6 trở lên
Ví dụ: Cho mảng số nguyên [1,2,3,2,3,4,5]
Sử dụng kiểu Set kết hợp spread syntax (Convert lại về mảng)
Tham khảo về Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 
const result = [...new Set([1,2,3,2,3,4,5])]
=> [1,2,3,4,5]