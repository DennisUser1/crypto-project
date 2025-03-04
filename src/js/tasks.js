import { fetchTaskList } from "./fakeApi.js";

const domElements = {
  loader: document.querySelector(".loader-wrap"),
  headingSection: document.querySelector(".hd-section"),
  doneTasksValue: document.getElementById("done-tasks"),
  taskCategorySection: document.querySelector(".tc-section"),
  taskCategoryList: document.querySelector(".tc-list"),
  taskSection: document.querySelector(".t-section"),
  tasksCarousel: document.querySelector(".tasks-carousel-list"),
};
const timeOut = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

addMarkup();

// --------------------Creating Upgrade markup-------------------
async function addMarkup() {
  domElements.loader.classList.remove("hidden");

  // Imitation fetch delay----------------------------------delete this
  const pause = await timeOut(800);
  // LOADER

  try {
    const taskPageData = await fetchTaskList();

    const markupCategoryList = createCategoryMarkup(taskPageData);
    const markupTasksCarousel = createTasksListCarouselMarkup(taskPageData);

    domElements.loader.classList.add("hidden");
    domElements.doneTasksValue.innerHTML = sumDoneTasks(taskPageData);
    domElements.taskCategoryList.innerHTML = markupCategoryList;
    domElements.tasksCarousel.innerHTML = markupTasksCarousel;
    domElements.headingSection.classList.add("show");
    domElements.taskCategorySection.classList.add("shown");
    domElements.taskSection.classList.add("shown");
  } catch (error) {
    domElements.loader.children[1].innerHTML =
      "Something went wrong, please try again...";
  }
}

function createTasksListCarouselMarkup(data) {
  const tasksCarouselMarkup = data.map(({ tasks }, index) => {
    const tasklistMarkup = tasks
      .map(({ title, value, buttonName, status }) => {
        let buttonContent = "";
        let buttonClass = "";
        switch (status) {
          case "active":
            buttonContent = buttonName;
            break;
          case "rejected":
            buttonContent =
              '<img src="../img/svg/rejected-task.svg" alt="rejected" />';
            buttonClass = "noActive";
            break;
          case "done":
            buttonContent = '<img src="../img/svg/done-task.svg" alt="done" />';
            buttonClass = "noActive";
            break;
          default:
            buttonContent = buttonName;
            break;
        }
        return `<li class="t-list-item">
                <div class="user-icon-wrap t">
                  <img src="../img/svg/star-light.svg" alt="" />
                </div>
                <div class="t-content">
                  <div class="t-text-wrap">
                    <h2 class="t-title">${title}</h2>
                    <p class="t-balance">+${value} WE</p>
                  </div>
                  <button class="t-item-btn ${buttonClass}">${buttonContent}</button>
                </div>
              </li>`;
      })
      .join("");
    return `
        <li class="tasks-carousel-item">
            <ul class="t-list">
                ${tasklistMarkup}
            </ul>   
        </li>
    `;
  });
  return tasksCarouselMarkup.join("");
}

// --------------------Create Category Markup-------------------
function createCategoryMarkup(data) {
  const categoryMarkup = data.map(({ category }, index) => {
    return `
        <li class="tc-list-item">
          <button class="tc-list-item-button ${!index && "active"}"
          onclick="handleTranslateTaskList(this, event)"
          data-translate="${index}">${category}</button>
        </li> 
    `;
  });
  return categoryMarkup.join("");
}

function sumDoneTasks(data) {
  let doneTasksValue = data.reduce((acc, el) => {
    return acc + el.tasks.filter(({ status }) => status === "done").length;
  }, 0);
  return doneTasksValue;
}
