---
sidebar_position: 30
---
# test-libbabeltrace.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libbabeltrace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <babeltrace/ctf-writer/writer.h>
#include <babeltrace/ctf-ir/stream-class.h>

int main(void)
{
	bt_ctf_stream_class_get_packet_context_type((void *) 0);
	return 0;
}

```
