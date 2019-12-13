export default [
  {
    type: 'mate',
    title: "Mate: Hiểu ý đồng đội 1",
    time: 120,
    category: 'Đời sống',
    content: `
    <h4> Kể tên 3 món ăn mà đồng đội bạn thích nhất </h4>
    <ul>
        <li>Thử thách thành công khi có 2/3 món ăn trùng nhau</li>
    </ul>
    `,
    isDisable: false,
    score: 10,
    answer: ''
  },
  {
    type: 'versus',
    title: "Versus: Dòng chảy sự kiện",
    time: 120,
    category: 'Lịch sử',
    content: `
      <h4>Sắp xếp các sự kiện lịch sử sau theo thứ tự: </h4>
      <ol>
          <li>Trần Cảnh lên ngôi vua lúc 8 tuổi</li>
          <li>Thái thượng Hoàng Trần Thừa nhiếp chính</li>
          <li>Vua Lý Huệ Tông nhường ngôi cho công chúa Chiêu Thánh</li>
          <li>Quân Mông Cổ xâm lượt lần thứ nhất </li>
      </ol>
    `,
    isDisable: false,
    score: 15,
    answer: '3 2 1 4'
  },
  {
    type: 'versus',
    title: "Versus: Hương vị italia",
    time: 120,
    category: 'Ẩm thực',
    content: `
      <h4> Nguyên liệu nào sau đây <b>KHÔNG</b> dùng làm pizza </h4>
      <ol>
          <li>Bột gạo</li>
          <li>Bột mì</li>
          <li>Men chua</li>
          <li>Bột nở </li>
          <li>Dầu đậu nành </li>
          <li>Ớt chuông </li>
          <li>Hành Tây </li>
          <li>Sốt Mayonaise </li>
          <li>Chà bông </li>
      </ol>
      <p>Vượt qua thử thách khi chỉ được sai 1 nguyên liệu</p>
    `,
    isDisable: false,
    score: 13,
    answer: '1 3 5 8'
  },
  {
    type: 'heal',
    title: "Healing point - 1",
    time: 120,
    category: 'none',
    isDisable: false,
    score: 'none',
  },
  {
    type: 'mate',
    title: "Mate: Đuổi hình bắt chữ",
    time: 180,
    category: 'Nghệ thuật',
    content: `
    <h4>
        Đồng đội thực hiện vẽ lại 3 vật do người dẫn chương trình đưa ra
    </h4>
    <p>Thử thách thành công khi người còn lại đoán được 3/3 hình vẽ</p>
    `,
    isDisable: false,
    score: 20,
    answer: 'none'
  },
  // ********** ROW 2 ***********
  
  {
    type: 'heal',
    title: "Healing point - 2",
    time: 120,
    category: 'none',
    isDisable: false,
    score: 'none',
  },
  {
    type: 'solo',
    title: "Solo: Lon nước kì bí",
    time: 120,
    category: 'Toán học',
    content: `
    <h4>
        Một chiếc lon đựng đồ uống giá 2 nghìn, tuy nhiên đồ uống trong lon lại đắc hơn cái lon là 1 nghìn 8 trăm đồng,
        hỏi vỏ lon có giá là bao nhiêu ?
    </h4>
    `,
    isDisable: false,
    score: 'bet',
    answer: '100'
  },
  {
    type: 'mate',
    title: "Mate: Hiểu ý đồng đội 2",
    time: 120,
    category: 'Văn học',
    content: `
      <h4>Hãy kể ra 3 câu chuyện cổ tích mà bạn thích nhất </h4>
      <p>Thử thách thành công, nếu bạn và đồng đội trùng được 2/3 câu chuyện</p>
    `,
    isDisable: false,
    score: 10,
    answer: 'none'
  },
  {
    type: 'versus',
    title: "Versus: Ai thông minh hơn học sinh lớp 3",
    time: 120,
    category: 'Toán học',
    content: `
      <h4> Phép tính dưới đây do 9 chữ số tạo thành nhưng mỗi chữ số chỉ xuất hiện 1 lần, hãy điền vào vị trí còn trống để hoàn thiện nó </h4>
      <h2>_27 - 3_6 = 58_</h2>
    `,
    isDisable: false,
    score: 15,
    answer: '927 - 346 = 581'
  },
  {
    type: 'solo',
    title: "Solo: Nốt nhạc vàng",
    time: 120,
    category: 'Âm nhạc',
    content: `
    <h4>
        Người nghe sẽ nghe qua 3 link sau rồi đưa ra tên của 3 bài hát
        đúng được 2/3 bài hát thì thắng thử thách.
    </h4>
    <a target="blank" href="https://drive.google.com/drive/folders/1ggodjm9NovkKp92PgCTYaWlRbUHVMd9z?usp=sharing">Link bài hát</a>
    `,
    isDisable: false,
    score: 'bet',
    answer: 'none'
  },
  // ********** ROW 3 ***********
  
  {
    type: 'versus',
    title: "Versus: Chuyên gia dinh dưỡng",
    time: 120,
    category: 'Ẩm thực',
    content: `
    <h4>
        Thực phẩm nào dưới đây có chứa rất ít calo
    </h4>
    <ol>
        <li>Khoai lang</li>
        <li>Chuối</li>
        <li>Dâu tây</li>
        <li>Khoai tây</li>
        <li>Cháo yến mạch</li>
        <li>Bắp luộc</li>
        <li>Bắp rang bơ</li>
        <li>Nấm</li>
        <li>Cháo trắng</li>
        <li>Đậu phộng</li>
    </ol>
    <p>Chỉ được sai 1 đáp án thử thách thành công!</p>
    `,
    isDisable: false,
    score: 18,
    answer: '3 4 5 7 8'
  },
  {
    type: 'mate',
    title: "Mate: Tâm ý tương thông",
    time: 130,
    category: 'Nghệ thuật',
    content: `
    <h4>
        Có 6 bức tranh, hãy quan sát và chọn ra 3 bức mà bạn ấn tượng nhất!
    </h4>
    <a target=blank href="https://photos.app.goo.gl/jEiFPn8jpnscCuxa8">Link Tranh</a>
    <p>Đồng đội bạn có 3/3 bức tranh giống bạn thì chiến thắng</p>
    `,
    isDisable: false,
    score: 20,
    answer: 'none'
  },
  {
    type: 'heal',
    title: "Healing point - 3",
    time: 120,
    category: 'none',
    isDisable: false,
    score: 'none',
  },
  {
    type: 'solo',
    title: "Versus: Sand-walk",
    time: 120,
    category: 'Khoa học',
    content: `
      <h4> Tuấn đi bộ trên một bãi cát mềm ở một bải biển, tuy nhiên mọi người đều kinh ngạc khi đằng sau cậu không hề có dấu chân. Chuyện gì đã xãy ra ????</h4>
      <p>Có 3 cơ hội để đưa ra đáp án</p>
    `,
    isDisable: false,
    score: 'bet',
    answer: 'đi ngược'
  },
  {
    type: 'mate',
    title: "Mate: Tay nghề",
    time: 120,
    category: 'Ẩm thực',
    content: `
    <h4>
        Hãy kể ra 4 món mà đồng đội của bạn có thể nấu
    </h4>
    <p>Nếu trùng 3/4 món thì chiến thắng</p>    
    `,
    isDisable: false,
    score: 15,
    answer: 'none'
  },

  // ********** ROW 4 ***********
  
  {
    type: 'solo',
    title: "Solo: Ai thông minh hơn học sinh lớp 5",
    time: 130,
    category: 'Toán học',
    content: `
    <h4>
        Tuổi của bố Nam bây giờ gấp 6 lần tuổi Name. nếu qua 5 năm nữa thì sẽ gấp 3.5 lần. Hỏi bây giờ Nam mấy tuổi?
    </h4>
    <p>Có 3 cơ hội cho thử thách này</p>
    `,
    isDisable: false,
    score: 'bet',
    answer: '5'
  },
  {
    type: 'versus',
    title: "Versus: Chuyên gia sự kiện",
    time: 130,
    category: 'Lịch sử',
    content: `
    <h4> Sự kiện nào dưới đây không đúng </h4>
    <ol>
        <li>Pháp chiếm Đà Nẵng vào năm 1959</li>
        <li>Tháng 3 năm 1945 Nhật Bản lật đổ Pháp tại Việt Nam</li>
        <li>Ngày 30/6/1945 Thành lập Đảng Dân chủ Việt Nam.</li>
        <li>23/12/1945: Thành lập đội Việt Nam Tuyên truyền giải phóng quân (Quân đội nhân dân Việt Nam)</li>
        <li>13/8/1945: Lệnh Tổng khởi nghĩa được phát ra.</li>
        <li>3-6/1945: Thành lập Khu giải phóng ở Việt Nam.</li>
    </ol>
    `,
    isDisable: false,
    score: 20,
    answer: '1 3 4 6'
  },  
  {
    type: 'mate',
    title: "Mate: Đoán ý đồng đội",
    time: 135,
    category: 'Âm nhạc',
    content: `
      <h4>Bạn sẽ hát lên 2 câu trong 1 bài hát cho đồng đội đoán</h4>
      <p>Trúng được 2/3 bài hát thử thách thành công</p>
    `,
    isDisable: false,
    score: 15,
    answer: 'none'
  },
  {
    type: 'mate',
    title: "Mate: Nhà phê bình",
    time: 135,
    category: 'Văn học',
    content: `
    <h4>
        Hãy kể về 3 tác phẩm văn học bạn yêu thích (không được nhắc tên) cho đồng đội đoán
    </h4>
    <p>Nếu đoán được 3/3 tác phẩm thì chiến thắng</p>    
    `,
    isDisable: false,
    score: 15,
    answer: 'none'
  },
  {
    type: 'heal',
    title: "Healing point - 3",
    time: 120,
    category: 'none',
    isDisable: false,
    score: 'none',
  },
  // ********** ROW 5 ***********
  
  {
    type: 'versus',
    title: "Versus: Thơ thẩn",
    time: 130,
    category: 'Văn học',
    content: `
    <h4> Ráp câu thơ dưới đây với tên bài thơ tương ứng</h4>
    <p>
      Bếp hoàng cầm ta dựng giữa trời <br>
      Chung bếp lửa nghĩa là gia đình đấy
    </p><hr>
    <p>
        Vảy bạc đuôi vàng loé rạng đông, <br>
        Lưới xếp buồm lên đón nắng hồng.
    </p><hr>
    <p>
        Hỏa mai đánh bằng rơm con cúi, cũng đốt xong nhà dạy đạo kia; <br>
        Gươm đeo dùng một ngọn dao phay, cũng chém đặng đầu quan hai nọ
    </p><hr>
    <p>
        Rải rác biên cương mồ viễn xứ, <br>
        Chiến trường đi chẳng tiếc đời xanh.
    </p><hr>
    <small>
      Chính xác 3/4 thử thách thành công
    </small> 
    `,
    isDisable: false,
    score: 20,
    answer: '1 3 4 6'
  }, 
  
  {
    type: 'heal',
    title: "Healing point - 3",
    time: 120,
    category: 'none',
    isDisable: false,
    score: 'none',
  }, 
  {
    type: 'mate',
    title: "Mate: Vua app",
    time: 120,
    category: 'Công nghệ',
    content: `
      <h4>Kể ra 4 app bạn yêu thích nhất khi dùng điện thoại</h4>
      <p>Chính xác 3/4 app thử thách thành công</p>
    `,
    isDisable: false,
    score: 15,
    answer: 'none'
  },
  {
    type: 'solo',
    title: "Solo: trọng lực",
    time: 120,
    category: 'Vật lý',
    content: `
    <h4>
      3 vật: một đồng xu, một tảng đá và một tờ giấy nếu được thả trong môi trường vô trọng lực
      thì vật nào sẽ chạm đất đầu tiên?
    </h4>  
    `,
    isDisable: false,
    score: 'bet',
    answer: 'none'
  },
  {
    type: 'versus',
    title: "versus: Chạy thi",
    time:  180,
    category: 'Vật lý',
    content: `
    <h4>
        Ba anh em thi chạy 100 met. nếu anh cả và anh hai thi chạy 100 mét thì 
        anh cả về đích trước 10m. Nếu anh hai và anh ba thi chạy 100m thì anh hai về trước 10 m
        và giành chiến thắng. Vậy nếu 3 anh em cùng thi chạy 100m thì anh cả về trước anh
        ba bao nhiêu m ???
    </h4>
    <p>Có 2 cơ hội cho thử thách này</p>
    `,
    isDisable: false,
    score: 20,
    answer: '19m'
  },
]