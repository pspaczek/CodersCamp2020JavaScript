import renderElement from '../tools/renderElement'

class UsersRanking {
  render(userList) {
    const rankingSection = renderElement({
      tagHTML: 'section',
      className: 'ranking'
    })

    const title = renderElement({
      tagHTML: 'div',
      className: 'ranking__title',
      parentElement: rankingSection,
    });

    renderElement({
      tagHTML: 'i',
      className: 'fas fa-poll ranking__title--icon',
      parentElement: title,
    });

    renderElement({
      tagHTML: 'h2',
      className: 'ranking__title--text',
      innerText: 'Mode Ranking',
      parentElement: title,
    });
    
    const rankingProperties = ['Place', 'Player', 'Answered']
    rankingProperties.forEach(property => {
      renderElement({
        tagHTML: 'span',
        className: 'ranking__position ranking__position--bold',
        innerText: property,
        parentElement: rankingSection
      })
    })
   
    const topUsers = [...userList].slice(0,3)
    topUsers.forEach((topUser, id) => {
      const record = renderElement({
        tagHTML: 'span',
        className: 'ranking__position',
        parentElement: rankingSection
      })      
      if (id === 0) {
        record.innerText = '1st'
      } else if (id === 1) {
        record.innerText = '2nd'
      } else {
        record.innerText = '3rd'
      }
      renderElement({
        tagHTML: 'span', 
        className: 'ranking__position',
        innerText: topUser.name,
        parentElement: rankingSection
      })
      renderElement({
        tagHTML: 'span', 
        className: 'ranking__position',
        innerText: topUser.name,
        parentElement: rankingSection
      })
    })
  }
}

export default UsersRanking;