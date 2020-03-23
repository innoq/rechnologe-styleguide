# require '../icon/rails_helper', __file__

module ComponentHelper

  def navbar_layout_tag(*args, &block)
    content_tag :div, class: 'navbar-layout', &block
  end

  def navbar_tag(*args, &block)
    content_tag :nav, class: 'navbar', &block
  end

  def secondary_navbar_tag(*args, &block)
    content_tag :nav, class: 'secondary-navbar', &block
  end

  # NOTE: this differs in nearly all conceivable ways from the JSX version.
  def navbar_item_tag(href, current: false, symbol:, label:, &block)
    link_to href, class: "navbar-item #{'current' if current}" do
      raw <<~EOS
        <div class="symbol">#{icon_tag symbol}</div>
        <div class="label">#{label}</div>
      EOS
    end
  end

  # NOTE: this differs in nearly all conceivable ways from the JSX version.
  def navbar_brand_tag(href, symbol:, label:, &block)
    link_to href, class: 'navbar-item brand' do
      raw <<~EOS
        <div class="symbol">#{icon_tag symbol}</div>
        <div class="label">#{label}</div>
      EOS
    end
  end
end
