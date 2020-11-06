module ComponentHelper

  def dropdown_menu_tag(label, *args, &block)
    content_tag :ul, class: 'dropdown', &block
  end

  def dropdown_menu_item_tag(*args, &block)
    content_tag :li, *args, &block
  end
end
