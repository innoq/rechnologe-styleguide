module ComponentHelper

  def badge_tag(modifier, content = nil &block)
    if block_given?
      content_tag :span, class: "badge badge-#{modifier}", &block
    else
      content_tag :span, content, class: "badge badge-#{modifier}"
    end
  end

end
