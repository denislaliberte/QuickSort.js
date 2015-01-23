describe("QuickSort", function() {
  it("return one item or less", function() {
    expect(sort([])).toEqual([]);
    expect(sort([1])).toEqual([1]);
    }
  );
  it("sort smalle element", function() {
    expect(sort([2,1])).toEqual([1,2]);
  }
  );
});
