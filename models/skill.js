const skills = [
    {id: 1, unit: 1, section_name: 'HTML and CSS', complete: true, inprogress: false, img: 'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_600/v1/course-uploads/3d5724c9-ff7d-4aa3-bd71-a0ba30fae502/eywfac1eazpt-HTMLandCSS.png'},
    {id: 2, unit: 1, section_name: 'Front End Fundamentals', complete: true, inprogress: false, img: 'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_600/v1/course-uploads/3d5724c9-ff7d-4aa3-bd71-a0ba30fae502/gd5o0d891f7z-BB5B35B7-8E1F-4747-90B7-ADA44D8EF45C_1_201_a.jpeg'},
    {id: 3, unit: 2, section_name: 'Full-Stack Development', complete: false, inprogress: true, img: 'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_600/v1/course-uploads/3d5724c9-ff7d-4aa3-bd71-a0ba30fae502/ic2dn8mkitt8-PE14J3Y1.jpeg'},
    {id: 4, unit: 3, section_name: 'Python and Django', complete: false, inprogress: false, img: 'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_600/v1/course-uploads/3d5724c9-ff7d-4aa3-bd71-a0ba30fae502/rbapdzgi1z27-RWixB90.png'},
    {id: 5, unit: 4, section_name: 'React Fundamentals', complete: false, inprogress: false, img: 'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_600/v1/course-uploads/830bba62-572f-43e4-9f22-061c2436a25b/j6trs9j19ok6-VunmGEq.jpeg'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find((skill) => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.complete = false
    skill.inprogress = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex((skill) => skill.id === id)
    skills.splice(idx, 1)
}