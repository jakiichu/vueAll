const random = (lower, upper) =>
  lower + Math.floor(Math.random() * (upper - lower + 1))

class Vector {
  _x = 0
  _y = 0

  set x(value) {
    this._x = value || 0
  }

  set y(value) {
    this._y = value || 0
  }

  get x() {
    return this._x
  }

  get y() {
    return this._y
  }

  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  static fromAngle(angle) {
    return new Vector(Math.cos(angle), Math.sin(angle))
  }

  add(other) {
    return new Vector(this.x + other.x, this.y + other.y)
  }

  sub(other) {
    return new Vector(this.x - other.x, this.y - other.y)
  }

  mult(other) {
    if (other instanceof Vector) {
      return new Vector(a.x * other.x, a.y * other.y)
    } else {
      return new Vector(a.x * other, a.y * other)
    }
  }

  div(other) {
    if (other instanceof Vector) {
      return new Vector(a.x / other.x, a.y / other.y)
    } else {
      return new Vector(a.x / other, a.y / other)
    }
  }

  //

  
  magSq() {
    const x = this.x
    const y = this.y
    return x * x + y * y
  }

  limit(max) {
    const mSq = this.magSq();
    if (mSq > max * max) {
      return this.div(Math.sqrt(mSq)) //normalize it
        .mult(max);
    }
    return this;
  };

  setMag(n) {
    return this.normalize().mult(n);
  };

  normalize() {
    const len = this.mag();
    return this.mult(1 / len);
  };

  mag() {
    return Math.sqrt(this.magSq());
  };


  //

  /**
   * @example
   * const a = new Vector(2, 4)
   * const b = new Vector(1, 10)
   *
   * const c = Vector.div(a, b)
   * const d = Vector.div(a, 2)
   *
   * // d.x === 2 / 2
   * // d.y === 4 / 2
   *
   * // c === 2 / 1
   * // c === 4 / 10
   */
  static div(a, b) {
    if (b instanceof Vector) {
      return new Vector(a.x / b.x, a.y / b.y)
    }
    return new Vector(a.x / b, a.y / b)
  }
}

class Fish {
  get style() {
    return {
      display: "block",
      height: "60px",
      width: "90px",
      transform: `translate(${this.position.x}px, ${this.position.y}px)`,
    }
  }

  constructor(
    position = new Vector(),
    velocity = Vector.fromAngle(random(0, 360)).mul(random(2, 4)),
  ) {
    this.acceleration = new Vector()
    this.position = position
    this.velocity = velocity
    this.maxForce = 1
    this.maxSpeed = 4
  }

  align(boids) {
    let perceptionRadius = 50
    let steering = createVector()
    let total = 0

    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y,
      )

      if (other != this && d < perceptionRadius) {
        steering.add(other.velocity)
        total++
      }
    }

    if (total > 0) {
      steering.div(total)
      steering.setMag(this.maxSpeed)
      steering.sub(this.velocity)
      steering.limit(this.maxForce)
    }

    return steering
  }

  update() {
    const position = this.position.add(this.velocity)
    const velocity = this.velocity.add(this.acceleration).limit(this.maxSpeed)

    return new Fish(position, velocity)
  }
}

let app1 = new Vue({
  el: ".game1",
  data: {
    rawHtml: "",
    fish: [],
    game: false,
  },
  created() {
    console.log("created")

    setInterval(() => {
      this.fish = this.fish.map((fish) => fish.update())
    }, 1000 / 60)
  },
  methods: {
    createMoreBlockDivFish: function (iteration) {
      for (i = 0; iteration > i; i++) {
        this.createOneDiv(i)
        console.log("рыба")
      }
    },
    //setInterval()
    createOneDiv: function (id) {
      this.fish = [...this.fish, new Fish(this.randomTop())]

      // this.fish[id] = id;
      // let asd = {
      //   position: "absolute",
      //   width: "90px",
      //   height: "60px",
      //   varableTop: 0,
      //   left: "",
      //   top: "",

      // };
      // asd.left = this.randomLeft() + "px";
      // asd.varableTop = this.randomTop();
      // console.log(this.randomTop() + "рандом");

      // asd.top = asd.varableTop + "px";
      // console.log(asd.top);
      // console.log(asd);
      // this.fish.splice(id, 1, asd);
    },

    randomAngle: function () {
      return Math.floor(Math.random() * Math.floor(360))
    },
    randomLeft: function () {
      return Math.floor(Math.random() * Math.floor(1820))
    },
    randomTop: function () {
      return Math.floor(Math.random() * 860)
    },
  },
})
