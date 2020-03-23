module ComponentHelper

  def main_layout_tag(*args, &block)
    content_tag :main, class: 'main-layout', &block
  end

end

