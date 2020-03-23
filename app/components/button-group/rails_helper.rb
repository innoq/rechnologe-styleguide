module ComponentHelper
  def button_group_tag(*args, &block)
    content_tag :div, class: 'button-group', &block
  end
end
