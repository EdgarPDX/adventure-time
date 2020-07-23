export function makeUser(formData){
    return {
        
        name: formData.get('name'),
        class: formData.get('class'),
        hp: 35,
        gold: 0,
        completed:{}
    
        
    };
}