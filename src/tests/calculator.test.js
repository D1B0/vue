import {mount} from "@vue/test-utils";
import Calculator from "../components/Calculator";


describe('Calculator Test', () => {
    it('operands test', () => {
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name="operand1"]')
        operand1Input.setValue('15')
        const operand2Input = wrapper.find('input[name="operand2"]')
        operand2Input.setValue('10')
        const sumOperationBtn = wrapper.find('button[name="+"]')
        sumOperationBtn.trigger('click')
        expect(wrapper.vm.result).toBe(25)

        const difOperationBtn = wrapper.find('button[name="-"]')
        difOperationBtn.trigger('click')
        expect(wrapper.vm.result).toBe(5)

        const multOperationBtn = wrapper.find('button[name="*"]')
        multOperationBtn.trigger('click')
        expect(wrapper.vm.result).toBe(150)

        const divisOperationBtn = wrapper.find('button[name="/"]')
        divisOperationBtn.trigger('click')
        expect(wrapper.vm.result).toBe(1.5)

        operand1Input.setValue('15')
        operand2Input.setValue('0')
        divisOperationBtn.trigger('click')
        expect(wrapper.vm.error).toEqual("Нельзя делить на 0")

        operand1Input.setValue('3')
        operand2Input.setValue('2')
        const degreeOperationBtn = wrapper.find('button[name="^"]')
        degreeOperationBtn.trigger('click')
        expect(wrapper.vm.result).toBe(9)
        
        const divIntOperationBtn = wrapper.find('button[name="//"]')
        divIntOperationBtn.trigger('click')
        expect(wrapper.vm.result).toBe(1)

        operand1Input.setValue('15')
        operand2Input.setValue('0')
        divIntOperationBtn.trigger('click')
        expect(wrapper.vm.error).toEqual("Нельзя делить на 0")

        const checkboxKeyboard = wrapper.find('input[name="keyboardBox"]')
        checkboxKeyboard.setChecked()
        expect(wrapper.vm.keyboardOn).toBe(true)

        let keyboardWindowButton = wrapper.find('button[name="1"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand1).toBe(151)

        keyboardWindowButton = wrapper.find('button[name="2"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand1).toBe(1512)

        keyboardWindowButton = wrapper.find('button[name="3"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand1).toBe(15123)

        keyboardWindowButton = wrapper.find('button[name="4"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand1).toBe(151234)

        keyboardWindowButton = wrapper.find('button[name="5"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand1).toBe(1512345)

        keyboardWindowButton = wrapper.find('button[name="6"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand1).toBe(15123456)

        keyboardWindowButton = wrapper.find('button[name="7"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand1).toBe(151234567)

        keyboardWindowButton = wrapper.find('button[name="8"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand1).toBe(1512345678)

        keyboardWindowButton = wrapper.find('button[name="9"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand1).toBe(15123456789)

        keyboardWindowButton = wrapper.find('button[name="0"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand1).toBe(151234567890)

        keyboardWindowButton = wrapper.find('button[name="<<"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand1).toBe(15123456789)

        const radioBtn = wrapper.find('input[value="operand2"]')
        radioBtn.setChecked()
        expect(wrapper.vm.picked).toBe('operand2')

        keyboardWindowButton = wrapper.find('button[name="<<"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand2).toBe(0)

        keyboardWindowButton = wrapper.find('button[name="9"]')
        keyboardWindowButton.trigger('click')
        expect(wrapper.vm.operand2).toBe(9)


    })
})