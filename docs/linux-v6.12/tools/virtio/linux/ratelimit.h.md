---
sidebar_position: 18
---
# ratelimit.h

### ファイル情報

- パス: `linux-v6.12/tools/virtio/linux/ratelimit.h`

### コンテンツ

```h
#define DEFINE_RATELIMIT_STATE(name, interval_init, burst_init)	int name = 0

#define __ratelimit(x) (*(x))


```
