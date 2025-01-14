---
sidebar_position: 9
---
# test-cplus-demangle.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-cplus-demangle.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
extern int printf(const char *format, ...);
extern char *cplus_demangle(const char *, int);

int main(void)
{
	char symbol[4096] = "FieldName__9ClassNameFd";
	char *tmp;

	tmp = cplus_demangle(symbol, 0);

	printf("demangled symbol: {%s}\n", tmp);

	return 0;
}

```
