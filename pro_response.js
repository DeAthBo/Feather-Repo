// 你想替换成的最终响应内容
const targetResponseBody = '076d1dab5e271f439fd25ea7383739e26d8d5b9c1575263727df5fa45689efe5de3a514c80577c82a11b0d9e7413f876ddc16bec66c533070c61515446198830';

// 获取当前请求的 Body
const currentRequestBody = $request.body;

// 检查请求的 Body 是否包含了第二次请求的独有特征（例如 "NU="）
if (currentRequestBody && currentRequestBody.includes('NU=')) {
  // 如果特征匹配，就执行响应替换
  console.log('匹配到第二次请求特征，执行响应修改');
  $done({ body: targetResponseBody });
} else {
  // 如果不匹配，就不做任何修改，直接放行原始响应
  console.log('未匹配到特征，放行原始响应');
  $done({});
}
