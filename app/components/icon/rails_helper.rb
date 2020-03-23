module ComponentHelper
  def icon_tag(symbol)
    content_tag :span, '', class: "icon icon-#{symbol}", role: 'presentation'
  end
end
