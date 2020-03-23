module ComponentHelper

  def table_tag(responsive: false, &block)
    content_tag :table, class: "table #{'table-responsive' if responsive}", role: 'table', &block
  end

end

