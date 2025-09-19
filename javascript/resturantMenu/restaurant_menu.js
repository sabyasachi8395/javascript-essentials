const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1} - ${item}, </p>`).join('');
const mainCourseMenuHTML = mainCourseMenu.map((item, index) => `<p>Item ${index + 1} - ${item}, </p>`).join('');
const dessertMenuHTML = dessertMenu.map((item, index) => `<p>Item ${index + 1} - ${item}, </p>`).join('');

document.getElementById('breakfastMenuItems').innerHTML =   breakfastMenuHTML;
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuHTML;
document.getElementById('dessertMenuItems').innerHTML = dessertMenuHTML;

document.getElementById('breakfastTotalItems').innerHTML = `Total Breakfast Items: ${breakfastMenu.length}`;
document.getElementById('maincourseTotalItems').innerHTML = `Total Main Course Items: ${mainCourseMenu.length}`;
document.getElementById('dessertTotalItems').innerHTML = `Total Dessert Items: ${dessertMenu.length}`;