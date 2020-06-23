function solution(n, lost, reserve) {
    
    //n명 학생들 모두 체육복 1개씩 가진 것으로 초기설정
    const students = Array(n).fill(1);

    //잃어버린 애들 체육복 1개 => 0개
    //lost 학생수만큼 반복해서 -1 
    for (let i = 0; i <lost.length; i++){
        const index = lost[i] - 1; 
        students[index] -= 1;
    }
    //여분의 체육복이 있는 아이들은 +1을 해준다.
    for (let i=0; i<reserve.length; i++){
        const index = reserve[i] -1;
        students[index] += 1;
    }
   
//0,0,1,2,1... 상태가 됨

    //for문 돌리면서 체육복 나눠주기
    for (let i = 0; i < students.length; i++){
        //첫번째 사람이 아니면서, 체육복이 없는 학생인 경우
        if (i !==0 && students[i] === 0){
            //앞 친구가 체육복이 있으면 빌린다.
            if (students[i-1] === 2){
                
            }
        }
    }




    return answer;
}