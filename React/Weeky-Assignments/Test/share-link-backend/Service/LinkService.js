class LinkService {
    constructor(knex){
        this.knex = knex;
    }

   async add(link){
     let q1 = await  this.knex
            .insert({
                title: link.title,
                url: link.url
            })
            .into('links')
            .returning('id')


            .catch(err => {
                throw new Error(err);
            })
            console.log(q1, 'llll')
       
            
    }

    list(search){
        if(search){
            let query = this.knex.select('id', 'title', 'url')
                .from('links')
                .where('links.title', 'like', `%${search}%`)
                .orWhere('links.url', 'like', `%${search}%`)

            return query.then((rows)=>{
                return rows.map(r => ({
                    id: r.id,
                    title: r.title,
                    url: r.url
                }));
            });
        } else {
            let query = this.knex.select('id', 'title', 'url')
            .from('links');

            return query.then((rows)=>{
                return rows.map(r => ({
                    id: r.id,
                    title: r.title,
                    url: r.url
                }));
            });
        }
    }
}

module.exports = LinkService;

/* 
add(link){
        return this.knex
            .insert({
                title: link.title,
                url: link.url
            })
            .into('links')
            .returning('id')
            .then(data1).insert({
                name: link.tags
            })
            .into('tags')
            .returning('id')
            .then(data2)
            .insert({
                link_id: data1,
                tag_id: data2
            })
            .into('links_tags')
            .catch(err => {
                throw new Error(err);
            })
    }
*/