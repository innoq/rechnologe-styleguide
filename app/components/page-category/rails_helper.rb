module ComponentHelper

  def page_category_tag(name, &block)
    content_tag :div, name, class: 'page-category', &block
  end
end

