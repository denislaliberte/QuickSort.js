describe("QuickSort", function() {
  it("return one item or less", function() {
    expect(sort([])).toEqual([]);
    expect(sort([1])).toEqual([1]);
    }
  );
});
