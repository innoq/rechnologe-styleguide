module ComponentHelper

  def table_tag(id, responsive: false, &block)
    content_tag :table, id: id, class: "table #{'table-responsive' if responsive}", role: 'table', &block
  end

end

