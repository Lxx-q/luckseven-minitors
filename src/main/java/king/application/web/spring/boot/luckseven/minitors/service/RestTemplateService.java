/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package king.application.web.spring.boot.luckseven.minitors.service;

import java.lang.reflect.Field;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

/**
 *
 * @author king
 */
@Service
public class RestTemplateService {

    public void add(MultiValueMap request, Object target) {
        Class targetClass = target.getClass();

        Field fields[] = targetClass.getDeclaredFields();
        // 开始 循环
        for (Field field : fields) {
            Object value = null;
            try {
                field.setAccessible(true);
                value = field.get(target);
            } catch (Exception e) {
            }
            //倘若没有 null ， 那么 我们就必须 重新开始获取值
            if (value == null) {
                continue;
            }
            //获取值， 之后 ， 放入 map
            String name = field.getName();
            request.add(name, value);
        }

    }
}
