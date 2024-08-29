/**
 * 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862#
 */

function solution(n, lost, reserve) {
  var answer = 0;

  // 최소 수업 들을 수 있는 사람 수
  const minStudents = n - lost.length;

  // 배열 정렬
  const sortedArray = (arr) => {
    return arr.sort((a, b) => {
      return a - b;
    });
  };

  const removeDuplicate = (arr1, arr2) => {
    let duplicateCount = 0;

    const newArr1 = arr1.filter((num) => {
      if (arr2.includes(num)) {
        duplicateCount++;
        return false; // 중복된 경우 제거
      }
      return true;
    });

    const newArr2 = arr2.filter((num) => {
      if (arr1.includes(num)) {
        // 이미 카운트된 중복 요소는 다시 카운트하지 않음
        return false; // 중복된 경우 제거
      }
      return true;
    });

    return { arr1: newArr1, arr2: newArr2, duplicateCount };
  };

  // 중복제거
  rmvDup = removeDuplicate(lost, reserve);

  answer = minStudents + rmvDup.duplicateCount;

  lost = sortedArray(rmvDup.arr1);
  reserve = sortedArray(rmvDup.arr2);

  for (let i = 0; i < reserve.length; i++) {
    const nextStu = reserve[i] + 1;
    const prevStu = reserve[i] - 1;

    if (lost.length !== 0 && prevStu > 0 && lost.includes(prevStu)) {
      answer++;
      lost = lost.filter((item) => item !== prevStu);

      continue;
    }

    if (lost.length !== 0 && nextStu <= n && lost.includes(nextStu)) {
      answer++;
      lost = lost.filter((item) => item !== nextStu);

      continue;
    }
  }

  return answer;
}

function solution(n, lost, reserve) {
  return (
    n -
    lost.filter((a) => {
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
}
