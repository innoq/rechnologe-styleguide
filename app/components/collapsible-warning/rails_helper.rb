module ComponentHelper

  def collapsible_warning_tag(open: false, &block)
    content_tag :div, class: 'collapsible-warning', open: open &block
  end
end
