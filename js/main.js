import { hello } from "./boardMembersData.js";
import { boardMember } from "./boardMembersData.js";

const memberList = document.querySelector(".card-container");

const memberName = document.querySelectorAll(".name");

for (let i = 0; i < boardMember.length; i++) {
  let card = `<section class="card">
      <section class="img-container">
          <img
              src="${boardMember[i].img}"
              alt="${boardMember[i].alt}"
          />
      </section>
      <section>
          <section>
              <span class="name">${boardMember[i].firstName} ${boardMember[i].lastName}</span>
              <span class="role">${boardMember[i].role}</span>
          </section>
          <span class="description">${boardMember[i].description}</span>
          <ul class="contact">
              <li>
                  <a
                      href="${boardMember[i].socials.github}"
                      target="_blank"
                  >
                      <i
                          class="fa-brands fa-square-github fa-contact fa-lg"
                      ></i>
                  </a>
              </li>
              <li>
                  <a
                      href="${boardMember[i].socials.linkedin}"
                      target="_blank"
                  >
                      <i class="fa-brands fa-linkedin fa-lg"></i>
                  </a>
              </li>
              <li>
                  <a href="">
                      <i class="fa-solid fa-envelope fa-lg"></i>
                  </a>
              </li>
          </ul>
      </section>
  </section>`;
  memberList.innerHTML += card;
  // memberName[i].innerText = boardMembers[i].firstName;
}

console.log(hello());
