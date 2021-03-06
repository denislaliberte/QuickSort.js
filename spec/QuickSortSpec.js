describe("QuickSort", function() {
  it("return one item or less", function() {
    expect(sort([])).toEqual([]);
    expect(sort([1])).toEqual([1]);
    }
  );
  it("sort smaller element", function() {
    expect(sort([2,1])).toEqual([1,2]);
    expect(sort([2,1,1])).toEqual([1,1,2]);
  }
  );
  it("sort smaller element with multiple pivot", function() {
    expect(sort([2,2,1])).toEqual([1,2,2]);
  }
  );
  it("sort grater element", function() {
    expect(sort([1,2,1])).toEqual([1,1,2]);
  }
  );
  it("sort element recursively", function() {
    expect(sort([43,6,7,3,2,6])).toEqual([2,3,6,6,7,43]);
  }
  );
});
