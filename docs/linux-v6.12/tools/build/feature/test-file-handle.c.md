---
sidebar_position: 17
---
# test-file-handle.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-file-handle.c`

### コンテンツ

```c
#define _GNU_SOURCE
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <inttypes.h>

int main(void)
{
	struct {
		struct file_handle fh;
		uint64_t cgroup_id;
	} handle;
	int mount_id;

	name_to_handle_at(AT_FDCWD, "/", &handle.fh, &mount_id, 0);
	return 0;
}

```
