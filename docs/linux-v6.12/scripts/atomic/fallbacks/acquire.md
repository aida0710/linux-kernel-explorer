---
sidebar_position: 1
---
# acquire

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/acquire`

### コンテンツ

```txt
cat <<EOF
	${ret} ret = arch_${atomic}_${pfx}${name}${sfx}_relaxed(${args});
	__atomic_acquire_fence();
	return ret;
EOF

```
