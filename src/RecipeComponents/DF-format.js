        <InputSection>
          <Label>Recipe Serves</Label>
          <InputText type="text" placeholder="Customer Serves" />
        </InputSection>
        <InputSection>
          <Label>Sales Price</Label>
          <InputText type="text" placeholder="Just a rough estimation" />
        </InputSection>
        <InputSection>
          <Label>Expected Sales Per Day</Label>
          <InputText type="text" placeholder="Average Sales p/day" />
        </InputSection>
        <InputSection>
          <Label>Total Staff Time Involved</Label>
          <InputText type="text" placeholder="Only cooking or prep time" />
        </InputSection>
        <InputSection>
          <Label>Total Cooking Time</Label>
          <InputText type="text" placeholder="Overall time to make recipe" />
        </InputSection>
        <InputSection>
          <Label>Use as Internal Recipe</Label>
          <SelectList>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </SelectList>
        </InputSection>
        <InputSection>
          <Label>Recipe Wastage</Label>
          <SelectList>
            <option value="0">0%</option>
            <option value="1">2%</option>
            <option value="2">5%</option>
            <option value="3">8%</option>
          </SelectList>
        </InputSection>



<InputSection>
<Label>Amount 1</Label>
<InputText
  type="text"
  name="input1"
  defaultValue={props.input1}
  onChange={props.handleCalc}
/>
</InputSection>
<InputSection>
<Label>Amount 2</Label>
<InputText
  type="text"
  name="input2"
  defaultValue={props.input2}
  onChange={props.handleCalc}
/>
</InputSection>
<InputSection>
<Label>Amount 3</Label>
<InputText
  type="text"
  name="input3"
  defaultValue={props.input3}
  onChange={props.handleCalc}
/>
</InputSection>