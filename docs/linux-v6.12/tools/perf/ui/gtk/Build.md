---
sidebar_position: 3
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/perf/ui/gtk/Build`

### コンテンツ

```txt
CFLAGS_gtk += -fPIC $(GTK_CFLAGS) -Wno-deprecated-declarations

gtk-y += browser.o
gtk-y += hists.o
gtk-y += setup.o
gtk-y += util.o
gtk-y += helpline.o
gtk-y += progress.o
gtk-y += annotate.o
gtk-y += zalloc.o

$(OUTPUT)ui/gtk/zalloc.o: ../lib/zalloc.c FORCE
	$(call rule_mkdir)
	$(call if_changed_dep,cc_o_c)

```
