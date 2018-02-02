/**
 * Dijkstra最短路径
 * 
 * 
 */
let keys = [];
let open_arr = [];
let closed = [];
let sortes = {};
let total = 0;
let end_key = null;
let now = null;
let graph = null;

let setStartNode = (key) => {
    // console.log("start key => " + key);
    let idx = keys.indexOf(key);
    if( idx >= 0) {
        for(let i = 0; i < keys.length; i++) {
            if ( idx === i) {
                open_arr.push(key);
                sortes[key] = { p: null, path: 0};
            } else {
                sortes[keys[i]] = { p: null, path: -1};
            }
        }
        // console.log("sortes => " + JSON.stringify(sortes));
        // console.log("open_arr => " + JSON.stringify(open_arr));
        // console.log("closed => " + JSON.stringify(closed));
    } else {
        console.log("해당 키가 없다.");
        return;
    }
};

let setEndNode = (key) => {
    end_key = key;
};

let reverse_path = () => {
    let sortest_path = [];
    let key = end_key;
    while(key) {
        sortest_path.push(key);
        key = sortes[key].p
    }

    sortest_path = sortest_path.reverse();
    console.log(JSON.stringify(sortest_path));
};
let getPath = (start, end ) => {

    open_arr = [];
    closed = [];
    total = 0;
    sortes = {};
    end_key = null;
    now = null;

    setStartNode(start);
    setEndNode(end);

    // console.log("map : " + JSON.stringify(graph));
    // console.log("open_arr : " + JSON.stringify(open_arr));

    while(open_arr.length > 0) {
        now = open_arr.shift();
        if(closed.indexOf(now) >= 0) continue;
        let childKeys = Object.keys(graph[now]);
        // console.log("keys => " + JSON.stringify(childKeys));
        for(let i = 0; i < childKeys.length; i++){
            let path = sortes[now].path + graph[now][childKeys[i]];
            // console.log("chid : " + childKeys[i] + ", path" + path);
            if(sortes[childKeys[i]].path === -1 || sortes[childKeys[i]].path > path){
                sortes[childKeys[i]].p = now;
                sortes[childKeys[i]].path = path
            }
            open_arr.push(childKeys[i]);
        }
        closed.push(now);
    }

    // console.log(JSON.stringify(sortes));
    if(sortes[end_key].path >= 0) {
        reverse_path();
        console.log("最短距离为" + sortes[end_key].path);
    }else{
        console.log("没有最短距离");
    }
}

let dijkstraSortestPath = (map) => {
    keys = Object.keys(map);
    // console.log(JSON.stringify(keys));
    graph = map;
};


var map = {a:{b:3,c:1},b:{a:2,c:1},c:{a:4,b:1}};

dijkstraSortestPath(map);

getPath('a', 'b');      // => ['a', 'c', 'b']
getPath('a', 'c');      // => ['a', 'c']
getPath('b', 'a');      // => ['b', 'a']
getPath('b', 'c', 'b'); // => ['b', 'c', 'b']
getPath('c', 'a', 'b'); // => ['c', 'b', 'a', 'c', 'b']
getPath('c', 'b', 'a'); // => ['c', 'b', 'a']