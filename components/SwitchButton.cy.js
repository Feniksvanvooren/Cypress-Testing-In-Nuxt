
import SwitchButton from './SwitchButton.vue';
describe('SwitchButton', () => {
    let buttonOptions = [
        {
            title: 'optie 1',
            value: 'optie1',
        },
        {
            title: 'optie 2',
            value: 'optie2',
        },
        {
            title: 'optie 3',
            value: 'optie3',
        },
        {
            title: 'optie 4',
            value: 'optie4',
        },
    ]

    it('should change active option on click', () => {
        cy.mount(SwitchButton, {
            propsData: {
                options: buttonOptions
            }
        });
        buttonOptions.forEach((btn, index) => {
            cy.get(`[data-testid="btn-option${index}`).click();
            cy.get(`[data-testid="btn-option${index}`).should('have.class', 'active');
        });
    });
});
