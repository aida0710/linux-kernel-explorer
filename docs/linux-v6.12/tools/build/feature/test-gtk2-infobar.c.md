---
sidebar_position: 23
---
# test-gtk2-infobar.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-gtk2-infobar.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#pragma GCC diagnostic ignored "-Wstrict-prototypes"
#include <gtk/gtk.h>
#pragma GCC diagnostic error "-Wstrict-prototypes"

int main(int argc, char *argv[])
{
	gtk_init(&argc, &argv);
	gtk_info_bar_new();

	return 0;
}

```
