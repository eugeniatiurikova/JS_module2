<template>
  <section class="service_nav">
    <div class="container service_nav_inside">
      <details class="service_filter_category">
        <summary class="service_filter_title_up">
          <span class="service_filter_title_text">filter</span>
          <svg
            class="service_arrow_margin_fliter"
            width="15"
            height="10"
            viewBox="0 0 15 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
            />
          </svg>
        </summary>
        <div class="service_filter_content">
          <details class="service_filter_item" open>
            <summary class="service_filter_item_title">Category</summary>
            <ul class="main_menu_items">
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Accessories</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Bags</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Denim</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Hoodies & Sweatshirts</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Jackets & Coats</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Polos</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Shirts</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Shoes</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Sweaters & Knits</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">T-Shirts</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Tanks</a>
              </li>
            </ul>
          </details>
          <details class="service_filter_item">
            <summary class="service_filter_item_title">Brand</summary>
            <ul class="main_menu_items">
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Brand name</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Another brand name</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">More brands</a>
              </li>
            </ul>
          </details>
          <details class="service_filter_item">
            <summary class="service_filter_item_title">Designer</summary>
            <ul class="main_menu_items">
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Designer</a>
              </li>
              <li class="main_menu_item sfi_padding">
                <a href="#" class="main_menu_link">Awesome designer</a>
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="service_filter">
        <summary>
          Trending now<i class="service_arrow_margin fas fa-chevron-down"></i>
        </summary>
        <div class="service_filter_button_popup">
          <ul class="main_menu_items">
            <li class="main_menu_item sfip_padding">
              <label for="trend1"
                ><input
                  id="trend1"
                  class="service_filter_check"
                  type="checkbox"
                />Trend name</label
              >
            </li>
            <li class="main_menu_item sfip_padding">
              <label for="trend2"
                ><input
                  id="trend2"
                  class="service_filter_check"
                  type="checkbox"
                />Another trend</label
              >
            </li>
            <li class="main_menu_item sfip_padding">
              <label for="trend3"
                ><input
                  id="trend3"
                  class="service_filter_check"
                  type="checkbox"
                />Other info</label
              >
            </li>
          </ul>
        </div>
      </details>
      <details class="service_filter">
        <summary>
          size<i class="service_arrow_margin fas fa-chevron-down"></i>
        </summary>
        <div class="service_filter_button_popup">
          <ul class="main_menu_items">
            <li class="main_menu_item sfip_padding">
              <label for="size_xs"
                ><input
                  id="size_xs"
                  class="service_filter_check"
                  type="checkbox"
                />XS</label
              >
            </li>
            <li class="main_menu_item sfip_padding">
              <label for="sizs_s"
                ><input
                  id="sizs_s"
                  class="service_filter_check"
                  type="checkbox"
                />S</label
              >
            </li>
            <li class="main_menu_item sfip_padding">
              <label for="size_m"
                ><input
                  id="size_m"
                  class="service_filter_check"
                  type="checkbox"
                />M</label
              >
            </li>
            <li class="main_menu_item sfip_padding">
              <label for="size_l"
                ><input
                  id="size_l"
                  class="service_filter_check"
                  type="checkbox"
                />L</label
              >
            </li>
          </ul>
        </div>
      </details>
      <details class="service_filter">
        <summary>
          price<i class="service_arrow_margin fas fa-chevron-down"></i>
        </summary>
        <div class="service_filter_button_popup">
          <ul class="main_menu_items">
            <li class="main_menu_item sfip_padding">
              <label for="price1"
                ><input
                  id="price1"
                  class="service_filter_check"
                  type="checkbox"
                />cheap & economy</label
              >
            </li>
            <li class="main_menu_item sfip_padding">
              <label for="price2"
                ><input
                  id="price2"
                  class="service_filter_check"
                  type="checkbox"
                />medium</label
              >
            </li>
            <li class="main_menu_item sfip_padding">
              <label for="price3"
                ><input
                  id="price3"
                  class="service_filter_check"
                  type="checkbox"
                />premium</label
              >
            </li>
          </ul>
        </div>
      </details>
    </div>
  </section>
</template>

<script>
</script>

<style>
</style>