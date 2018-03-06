Android打包
1. 生成签名
```
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
放到./app文件夹下

2. 编辑你项目目录下的android/app/build.gradle，添加如下的签名配置：
```
signingConfigs {
    release {
        storeFile file("../../app/my-release-key.keystore")
        storePassword "123456"
        keyAlias "my-key-alias"
        keyPassword "123456"
    }
}
buildTypes {
    release {
        ...
        signingConfig signingConfigs.release
    }
}
```

3. 生成发行APK包
```
cd android && ./gradlew assembleRelease
```
编译过程中出现uncompiled PNG file passed as argument.异常
解决方法：在android/gradle.properties文件中添加```android.enableAapt2=false```
