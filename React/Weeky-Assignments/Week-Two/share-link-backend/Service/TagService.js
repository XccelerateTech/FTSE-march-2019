class TagService {
    constructor(knex){
        this.knex = knex

    }
    
    async add(tags){
        let query = await this.knex
        .insert({
            name: tags.name
        })
        .into('tags')
        .returning('id')
        .catch(err => {
            throw new Error(err)
        })

        console.log('sausage')
        console.log(query)
        let array = []
        function makeArray(query){
            array.push(query[0])
        }
        makeArray(query)
        console.log(array , 'apples')

        let query1 = await this.knex
                        .from('links')
                        .select('id')
                        .orderBy('id', 'DESC')
                        .limit(1)

                        console.log(query1, 'this is query 1')

// not really working...
    for (let i = 0; i <= array.length; i++)  {
             let query3 = await this.knex
                                .insert({
                                    link_id: array[i],
                                    tag_id: query[0].id
                                })
                                .into('links_tags')
                                .returning('id')    
                                .catch(err => {
                                    throw new Error(err)
                                })

                                console.log(query3, 'mf')
        }



       
    //    let query2 = await  this.knex
    //             .insert({
    //                 link_id: JSON.parse(q1),
    //                 tag_id: JSON.parse(q2)
    //             })
    //             .into('links_tags').catch(err => {
    //                 throw new Error(err)
    //             })
        
    //     .catch(err=> {
    //         throw new Error(err);
    //     })
    }

    list(search){
        if(search){
            let query = this.knex.select('tag_id', 'name', 'link_id')
            .from('tags')
            .where('links.name', 'like', `%${search}%`)

            return query.then((rows)=>{
                return rows.map(r=>({
                    id: r.id,
                name: r.name,
                }));
            });
        } else {
            let query = this.knex.select('tag_id', 'name', 'link_id')
            .from('tags');

            return query.then((rows)=> {
                return rows.map(r=> ({
                    id: r.id,
                    name: r.name,
                }));
            });
        }
    }
}
module.exports = TagService